import {  Loading } from "@nextui-org/react";
import { useFetch } from "../../hooks/useFetch";
import { URL, columnsModal } from "../../utils/constants";
import Table from "../Table/Table";

function ExpandableTableConsumption({ data }) {
    const { data: userData, loading } = useFetch(
        `${URL}user/${data.user_id}/documents/completed`
    );

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                userData && <Table columns={columnsModal.completed} data={userData} />)}
        </>
    );
}

export default ExpandableTableConsumption;
