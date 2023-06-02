import { ThreeDots } from 'react-loader-spinner'

export default function LoadingButton(props) {
    const { disabled, texto } = props;

    return (

        <button disabled={disabled} type="submit" data-test="signup-btn">
            <ThreeDots
                height="65"
                width="65"
                radius="9"
                color="#FFF"
                ariaLabel="three-dots-loading"
                visible={(disabled) ? true : false}
            />
            {(!disabled) && texto}
        </button>
    )
}