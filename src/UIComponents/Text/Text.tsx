import React from 'react'
import "./text.css"

export enum TextType {
    Title1 = 'title1',
    Title2 = 'title2',
    Title3 = 'title3',
    Body1 = 'body1',
    Body2 = 'body2',
    Button1 = 'button1',
    Button2 = 'button2',
    Subtitle = 'subtitle',
    SubtitleBold = 'subtitleBold',
    Caption = 'caption',
    CaptionBold = 'captionBold',
}

export enum TextColor {
    Primary = 'black',
    Grey = "darkGrey",
    Secondary = 'secondary',
    Inactive = 'inactive',
    Inverse = 'inverse',
    Info = 'info',
    Error = 'error',
    Warning = 'warning',
}

interface TextProps {
    type: TextType;
    color?: TextColor;
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string,
}

const Text: React.FC<TextProps> = ({ type, color = TextColor.Primary, children, style, className, ...props }) => {

    const tagMap: Record<TextType, keyof JSX.IntrinsicElements> = {
        [TextType.Title1]: 'h1',
        [TextType.Title2]: 'h2',
        [TextType.Title3]: 'h3',
        [TextType.Body1]: 'p',
        [TextType.Body2]: 'p',
        [TextType.Button1]: 'p',
        [TextType.Button2]: 'p',
        [TextType.Subtitle]: 'h4',
        [TextType.SubtitleBold]: 'h4',
        [TextType.Caption]: 'p',
        [TextType.CaptionBold]: 'p',
    }

    const colorMap: Record<TextColor, string> = {
        [TextColor.Primary]: 'var(--black)',
        [TextColor.Grey]: 'var(--grey-dark)',
        [TextColor.Secondary]: 'var(--grey-dark)',
        [TextColor.Inactive]: 'var(--inactive)',
        [TextColor.Inverse]: 'var(--inverse)',
        [TextColor.Info]: 'var(--info)',
        [TextColor.Error]: 'var(--error)',
        [TextColor.Warning]: 'var(--warning)',
    };

    const Tag = tagMap[type];
    const resolvedColor = colorMap[color];


    return (
        <Tag className={`text ${type} ${className}`} style={{ color: resolvedColor, ...style }} {...props}>
            {children}
        </Tag>
    )
}

export default Text