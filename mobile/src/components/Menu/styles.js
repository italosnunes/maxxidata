import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    margin-top: -40px;
    padding-bottom: 20px;
`
export const Box = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 240px;
    height: 120px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0;
`;

export const Btn = styled.TouchableOpacity`
    background: #fff;
    width: 115px;
    height: 90px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Label = styled.Text`
    padding: 10px 0;
    color: grey;
    font-size: 16px;
`;

export const Divisor = styled.View`
    width: 1px;
    border: solid 0.3px grey;
    height: 50%;
`;

export const Content = styled.View`
    flex: 1;
    padding: 20px;
    width: 100%;
`;