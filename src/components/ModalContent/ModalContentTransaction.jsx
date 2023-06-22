import {  Loading, styled } from "@nextui-org/react";
import { useFetch } from "../../hooks/useFetch";
import { URL } from "../../utils/constants";

const StyledContainerImg = styled("div", {
    display: "flex",
});

const StyledImg = styled("img", {
    width: "250px", height: "250px" 
});

function ModalContentTransaction({ data }) {
    const { data: transactionData, loading } = useFetch(
        `${URL}transactions/${data.TransactionId}/`
    );

    if (loading) {
        return <div><Loading></Loading></div>;
    }

    return (
        <StyledContainerImg>
            {
                transactionData.ImagesTransaction.clientFace ? <StyledImg src={ "data:image/png;base64," + transactionData.ImagesTransaction.clientFace } /> : <p>No hay imagen</p>
            },
            {
                transactionData.ImagesTransaction.frontCroppedDocument ? <StyledImg src={ "data:image/png;base64," + transactionData.ImagesTransaction.frontCroppedDocument } /> : <p>No hay imagen</p>
            },
            {
                transactionData.ImagesTransaction.backCroppedDocument ? <StyledImg src={ "data:image/png;base64," + transactionData.ImagesTransaction.backCroppedDocument } /> : <p>No hay imagen</p>
            },
        </StyledContainerImg>
    );
}

export default ModalContentTransaction;
