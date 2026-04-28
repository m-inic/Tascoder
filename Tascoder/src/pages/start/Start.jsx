import "./Start.css";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import { Link, useNavigate } from "react-router";

export default function Start() {
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    navigate("/tascoderApp");
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <>
      <MainHeader />
      <section id="startNowSection">
        <div id="startNowLeftside">
          <div id="startNowDescriptionHolder">
            <h3>Start here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              lacinia, leo quis interdum ullamcorper, metus turpis semper augue,
              et condimentum metus nunc ac odio. In placerat hendrerit elit, in
              malesuada eros aliquet eu.
            </p>
          </div>
        </div>
        <form method="POST" onSubmit={handleRegister}>
          <h2>sign up</h2>
          <div id="startNowFillOut">
            <label htmlFor="startFname">First name</label>
            <input
              type="text"
              id="startFname"
              name="Fname"
              autoComplete="given-name"
              required
            />
            <label htmlFor="startLname">Last name</label>
            <input
              type="text"
              id="startLname"
              name="Lname"
              autoComplete="family-name"
              required
            />
            <label htmlFor="startPassw">Password</label>
            <input type="text" id="startPassw" name="Passw" required />
            <label htmlFor="startPhone">Phone</label>
            <input
              type="tel"
              id="startPhone"
              name="Phone"
              autoComplete="tel"
              required
            />
          </div>
          <div id="startNowTerms">
            <div id="startNowAccept">
              <input type="checkbox" required></input>
              <p>
                Agree to{" "}
                <Link to="terms" className="startNowLoginLink">
                  terms
                </Link>{" "}
                and{" "}
                <Link to="conditions" className="startNowLoginLink">
                  conditions
                </Link>
              </p>
              <button id="startNowRegisterBtn" type="submit">
                Register
              </button>
            </div>
            <div id="startNowLoginOption">
              <p>
                Already have an account?{" "}
                <Link to="login" className="startNowLoginLink" onClick={scrollToTop}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}
