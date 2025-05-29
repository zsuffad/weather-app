import {css} from 'lit';

// Get raw CSS content
// You'll need to manually copy the CSS content from your icon library files
export const commonStyles = css`
    :host {
        --light-gray: rgba(117, 117, 117, 1);
        --color-disabled: rgba(117, 117, 117, .5);
        --input-height: 2rem;
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;

        white-space: nowrap;
        clip-path: inset(100%);
        clip: rect(0 0 0 0);
        overflow: hidden;
    }

    .widget-title {
        font-size: 1.75rem;
        font-weight: bold;
        margin: 0;
        display: inline-block;
    }

    input[type='text'] {
        border: none;
    }

    .unit {
        color: var(--light-gray);
    }
`;
