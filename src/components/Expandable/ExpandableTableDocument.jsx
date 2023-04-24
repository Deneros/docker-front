import React from "react";
import {
  styled,
  Avatar,
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

const MainContainer = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100%",
});

const DocumentContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "400px",
  width: "600px",
});

const InfoContainer = styled("div", {
  position: "absolute",
  top: "0",
  left: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "50%",
  marginBottom: "50%",
});

function ExpandableTableDocument({ data }) {
  const id_doc = data.id_document;
  const sender = data.sender;
  const destinataries = data.destinataries;
  const { data: documentData, loading } = useFetch(
    `http://localhost:8080/api/sended/document/${id_doc}`
  );

  return (
    <MainContainer>
      <InfoContainer>
        <Text h4 style={{ fontFamily: "'Roboto', sans-serif" }}>
          Remitente
        </Text>
        <Avatar.Group>
          {sender.map((user, index) => (
            <Tooltip content={user.name} key={index}>
              <Avatar
                size="lg"
                text={user.name}
              />
            </Tooltip>
          ))}
        </Avatar.Group>
        <Text h4 style={{ fontFamily: "'Roboto', sans-serif" }}>
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
                style={{
                  border: user.signed
                    ? "2px solid #28A745"
                    : "2px solid #FF0000",
                  borderRadius: "50%",
                }}
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
            data={
              "data:application/pdf;base64," +
              documentData.document +
              "#toolbar=0&navpanes=0&scrollbar=0"
            }
          ></Styleobject>
        )}
      </DocumentContainer>
    </MainContainer>
  );
}

export default ExpandableTableDocument;