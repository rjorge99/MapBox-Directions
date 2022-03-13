import reactLogo from '../logo.svg';

export const ReactLogo = () => {
    return (
        <img
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                width: '130px'
            }}
            alt='React logo'
            src={reactLogo}
        />
    );
};
