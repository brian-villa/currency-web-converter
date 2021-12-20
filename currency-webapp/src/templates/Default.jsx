import Header from "../partials/Header"

const Default = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )

}

export default Default