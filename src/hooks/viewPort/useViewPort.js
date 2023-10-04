import { useEffect, useState } from "react";

export const useViewPort = () => {
    
    const [display, setDisplay] = useState(window.innerWidth);
    const [type, setType] = useState({
        display: '',
        width: ''
    });

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setDisplay(windowWidth);

            // TIPO DE DISPOSITIVO
            if (windowWidth <= 700) {
                setType({
                    display: 'Mobile',
                    width: windowWidth
                });
            } else {
                setType({
                    display: 'Desktop',
                    width: windowWidth
                });
            }
        };

        // Adiciona um ouvinte de redimensionamento de janela
        window.addEventListener("resize", handleResize);

        // Remove o ouvinte quando o componente é desmontado
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        display,
        type
    };
};
