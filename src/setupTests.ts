// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import { AnyAction } from 'redux';
import { ThunkMiddleware, thunk } from 'redux-thunk';
import { RootState } from 'store/reducers/rootReducer';
import { TextDecoder, TextEncoder } from 'util';

// @ts-ignore
global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;

const middlewares = [thunk as ThunkMiddleware<RootState, AnyAction>];
// @ts-ignore
const mockStore = configureMockStore<RootState, AnyAction>(middlewares);

