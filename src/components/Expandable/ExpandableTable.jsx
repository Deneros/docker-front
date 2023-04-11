import { styled, Avatar, Grid } from "@nextui-org/react";

const Styleobject = styled("object", {
  height: "400px",
  width: "700px",
});

function ExpandibleTable(data) {
  const nameUsers = ["Junior", "Jane", "W", "John", "JR"];
//   const documentData = JSON.parse(JSON.stringify(data)).data;
  const pictureUsers = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026702d",
    "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  ];

//   getDocument(
//     "http://localhost:8080/api/sended/document/" + documentData.id_document
//   );
//   const document = "data:application/pdf;base64," + base64Document;

  return (
    <div style={{ display: "flex", gap: "30px", paddingLeft: "60px" }}>
      <div>
        {/* <Styleobject data={document}></Styleobject> */}
      </div>
      <Grid.Container gap={1} css={{ margin: "auto", height: "fit-content" }}>
        <Grid xs={12}>
          <Avatar.Group count={12}>
            {nameUsers.map((name, index) => (
              <Avatar key={index} size="lg" pointer text={name} stacked />
            ))}
          </Avatar.Group>
        </Grid>
        <Grid xs={12}>
          <Avatar.Group count={12}>
            {pictureUsers.map((url, index) => (
              <Avatar
                key={index}
                size="lg"
                pointer
                src={url}
                bordered
                color="gradient"
                stacked
              />
            ))}
          </Avatar.Group>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default ExpandibleTable
