import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useBlockNavigation = (shouldBlock: boolean, message: string) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (shouldBlock) {
                event.preventDefault();
                event.returnValue = ''; // This triggers the browser confirmation dialog
            }
        };

        const handleNavigationAttempt = (event: any) => {
            if (shouldBlock) {
                const confirmLeave = window.confirm(message);
                if (!confirmLeave) {
                    event.preventDefault();
                    navigate(location.pathname, { replace: true });
                }
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        window.history.pushState = ((f) =>
            function pushState() {
                // @ts-ignore
                const ret = f.apply(this, arguments);
                window.dispatchEvent(new Event('pushstate'));
                window.dispatchEvent(new Event('locationchange'));
                return ret;
            })(window.history.pushState);

        window.history.replaceState = ((f) =>
            function replaceState() {
                // @ts-ignore
                const ret = f.apply(this, arguments);
                window.dispatchEvent(new Event('replacestate'));
                window.dispatchEvent(new Event('locationchange'));
                return ret;
            })(window.history.replaceState);

        window.addEventListener('popstate', handleNavigationAttempt);
        window.addEventListener('locationchange', handleNavigationAttempt);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('popstate', handleNavigationAttempt);
            window.removeEventListener('locationchange', handleNavigationAttempt);
        };
    }, [shouldBlock, message, navigate, location.pathname]);
};
