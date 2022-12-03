import React    from "react";

function Footer() {
  return (
       <>
            <footer className="blog-footer bg-light " style={{height : "25vh"}}>
                 <p className="pt-3">Blog template built for Bootstrap by .</p>
                 <p> Back to top</p>
                 <div className="mb-3">
                      <input type="email" className="form-control w-25 mx-auto" id="exampleFormControlInput1" placeholder="name@example.com"/>
                 </div>
            </footer>
       </>
  )
}

export default Footer;