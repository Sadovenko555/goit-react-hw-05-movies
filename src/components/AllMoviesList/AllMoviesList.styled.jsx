import styled from '@emotion/styled';

export const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    overflow-x: hidden;
    padding: 0 20px;
    margin-bottom: 20px;
    margin-top: 20px; /* Добавлено свойство margin-top */
`;

export const MovieCard = styled.div`
    border: none;
    border-radius: 8px;
    padding: 2px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
    }
`;

export const MovieImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 8px;
`;

export const MovieTitle = styled.p`
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
`;
