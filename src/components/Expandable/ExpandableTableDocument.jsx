import { styled, Avatar, Grid, Text, Tooltip } from "@nextui-org/react";
import { useFetch } from "../../hooks/useFetch";

const Styleobject = styled("object", {
  height: "400px",
  width: "300px",
});

function ExpandableTableDocument(id) {
  let id_doc = id.data.id_document;
  let sender = id.data.sender;
  let destinataries = id.data.destinataries;
  const { data, loading } = useFetch(
    "http://localhost:8080/api/sended/document/" + id_doc
  );


  return (
    !loading && (
      <>
        <div style={{ display: "flex", gap: "30px", paddingLeft: "60px" }}>
          <div>
            <Styleobject
              data={"data:application/pdf;base64," + data.document}
            ></Styleobject>
          </div>
          <Grid.Container
            gap={1}
            css={{ margin: "auto", height: "fit-content" }}
          >
            <Text h3 b>
              Remitente
            </Text>
            <Grid xs={12}>
              <Avatar.Group>
                {sender.map((user, index) => (
                  <Tooltip content={user.name}>
                    <Avatar
                      key={index}
                      size="lg"
                      pointer
                      text={user.name}
                      bordered
                      // src={user.picture}
                      color="success"
                      stacked
                    />
                  </Tooltip>
                ))}
              </Avatar.Group>
            </Grid>
            <Text h3 b>
              Firmantes
            </Text>
            <Grid xs={12}>
              <Avatar.Group>
                {destinataries.map((user, index) => (
                  <Tooltip content={user.name}>
                    <Avatar
                      key={index}
                      size="lg"
                      pointer
                      text={user.name}
                      bordered
                      // src={user.picture}
                      color={user.signed? "success":"error"}
                      stacked
                    />
                  </Tooltip>
                ))}
              </Avatar.Group>
            </Grid>
            <Grid xs={12}></Grid>
          </Grid.Container>
        </div>
      </>
    )
  );
}

export default ExpandableTableDocument;
