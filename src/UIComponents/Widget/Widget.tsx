import Icon from "UIComponents/Icon"
import "./widget.css"
import { IconName } from "UIComponents/Icon/iconType"
import Text from "UIComponents/Text"
import { TextColor, TextType } from "UIComponents/Text/Text"

const Widget = () => {
    return (
        <div className="widget">
            <Icon name={IconName.Document} size={32} />
            <Text type={TextType.Title2}>$60,400</Text>
            <Text type={TextType.Subtitle} color={TextColor.Secondary}>Overdue Amount</Text>
        </div>
    )
}

export default Widget