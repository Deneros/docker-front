import React from "react";
import {
  styled,
  Avatar,
  Grid,
  Text,
  Tooltip,
  Loading,
} from "@nextui-org/react";
import { useFetch } from "../../hooks/useFetch";

const Styleobject = styled("object", {
  height: "400px",
  width: "600px",
  border: "none",
  display: "block",
  margin: "0 auto",
});

const DocumentContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "400px",
  width: "600px",
});

const InfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
});

function ExpandableTableDocument({ data }) {
  const id_doc = data.id_document;
  const sender = data.sender;
  const destinataries = data.destinataries;
  const { data: documentData, loading } = useFetch(
    `http://localhost:8080/api/sended/document/${id_doc}`
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "30px",
          paddingLeft: "60px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InfoContainer>
          <Text h3 b style={{ fontFamily: "'Roboto', sans-serif" }}>
            Remitente
          </Text>
          <Avatar.Group>
            {sender.map((user, index) => (
              <Tooltip content={user.name} key={index}>
                <Avatar
                  size="lg"
                  pointer
                  text={user.name}
                  bordered
                  color="success"
                  stacked
                />
              </Tooltip>
            ))}
          </Avatar.Group>
          <Text h3 b style={{ fontFamily: "'Roboto', sans-serif" }}>
            Firmantes
          </Text>
          <Avatar.Group>
            {destinataries.map((user, index) => (
              <Tooltip content={user.name} key={index}>
                <Avatar
                  size="lg"
                  pointer
                  text={user.name}
                  bordered
                  color={user.signed ? "success" : "error"}
                  stacked
                />
              </Tooltip>
            ))}
          </Avatar.Group>
        </InfoContainer>
        <DocumentContainer>
          {loading ? (
            <Loading size="xl" />
          ) : (
            <Styleobject
              data={"data:application/pdf;base64," + documentData.document+"#toolbar=0&navpanes=0&scrollbar=0"}
            ></Styleobject>
          )}
        </DocumentContainer>
      </div>
    </>
  );
}

export default ExpandableTableDocument;