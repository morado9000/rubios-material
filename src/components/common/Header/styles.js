export const headerStyle = {
    wrapper: {
        width: "100%",
        display: "flex",
        flexDirection: {
            xs: "column",
            md: "row"
        },
        justifyContent: "space-between",
        backgroundColor: "#FFF",
        color: "#196db6",
        height: "50px",
    },
    navigation: {
        display: "flex",
        flexDirection: {
            xs: "column",
            md: "row"
        },
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "0",
        margin:"0",
    },
    navitems: {
        textTransform: "uppercase",
        mr: 5
    },
    navborder: {
        textTransform: "uppercase",
        mr: 2.5,
        paddingRight: 2.5,
        borderStyle: "solid",
        borderWidth: "0px 1px 0px 0px"
    },
    buttonBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#196db6",
        color: "#FFF",
        height: "100%",
        pl: 2,
        pr: 2
    },
    buttonItem:  {
        textTransform: "uppercase",
        textAlign: "center"

    }
}