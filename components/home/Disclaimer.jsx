export default function Disclaimer() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.7rem",
        padding: "0rem",
        maxWidth: "100%",
        wordWrap: "break-word",
      }}
    >
      <img
        src="imgs\logos\GDSC.webp"
        alt="Image description"
        style={{
          marginRight: "0.5rem",
          maxHeight: "2em",
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <span>
        Disclaimer: DSC is an independent group; the activities and opinions
        expressed by the group should in no way be linked to Google, the
        corporation.
      </span>
    </div>
  );
}
