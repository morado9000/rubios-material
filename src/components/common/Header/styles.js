export const headerStyle = {
    toolBarStyle: {
        width: "100%",
        position:"static",
        backgroundColor: "#FFF",
        color: "#196db6",
    },
    wrapper: {
        width: "100%",
        flexDirection: {
            xs: "column",
            md: "row"
        },
        justifyContent: "space-between",
        alignItems: {md: "center"},
    },
    navigation: {
        display: "flex",
        flexDirection: {
            xs: "column",
            md: "row"
        },
        justifyContent: "center",
        alignItems: "center",
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
        alignSelf: 'stretch',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#196db6",
        color: "#FFF",
        height: "64px",
        pl: 2,
        pr: 2
    },
    buttonItem:  {
        textTransform: "uppercase",
        textAlign: "center",

    }
}