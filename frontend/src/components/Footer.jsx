
const Footer = () => {
    return (
       <div id= "footer">
        <div id= "footercol1">
            <div id="footerTitle" className='footerPadding'>
                <h1>Find Color</h1>
            </div>
            <div className='footerPadding'>
                <p>Latest Blog Post</p>
                <h2>Ready to get started?</h2>
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <div>
            <div className= "footercol2">
                <div className= "footercol2 footerPadding">
                    {/* <div>
                        <p>Product</p>
                        <p>Product</p>
                        <p>Product</p>
                        <p>Product</p>
                        <p>Product</p>
                    </div> */}
                    <div>
                        <p>Home</p>
                        <p>Users</p>
                        <p>Missing People</p>
                        <p>Profile</p>
                    </div>
                </div>
            </div>
            <div className= "footercol2 footerPadding">
                <p>© 2010 — 2020   Privacy — Terms</p>
            </div>
        </div>
       </div> 
    )
}

export default Footer