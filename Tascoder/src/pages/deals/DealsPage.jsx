import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import "./DealsPage.css";
import "./DealsPage.css";
import Deals from "../../components/Deals";
import "../../components/Deals.css";
import { Link } from "react-router";

export default function DealsPage() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <MainHeader />
      <Deals></Deals>
      <section id="dealsTableSection">
        <div id="tableHolder">
          <div id="tableHolderTitleHolder">
            <h2>Compare plans</h2>
            <Link to="#" id="dealsFAQ">
              📘FAQ
            </Link>
          </div>
          <div id="dealsComparisonHolder">
            <div id="dealsNamesHolder">
              <div className="dealsNames"></div>
              <div className="dealsNames">
                <h3>Begginer</h3>
                <div className="dealsPrices">
                  <p>$0</p>
                  <span>free</span>
                </div>
              </div>
              <div className="dealsNames">
                <h3>Pro</h3>
                <div className="dealsPrices">
                  <p>$5</p>
                  <span>per user/month $60 billed yearly</span>
                </div>
              </div>
              <div className="dealsNames">
                <h3>Business</h3>
                <div className="dealsPrices">
                  <p>$10</p>
                  <span>per user/month, $96 billed yearly</span>
                </div>
              </div>
            </div>
            <table className="tablesDealsPage">
              <caption>Essentials</caption>
              <tbody>
                <tr>
                  <th>Personal projects</th>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>300</p>
                  </td>
                  <td>
                    <p>300 each</p>
                  </td>
                </tr>
                <tr>
                  <th>Due dates & times</th>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                </tr>
                <tr>
                  <th>Priority levels</th>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                </tr>
                <tr>
                  <th>Sub-tasks</th>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                </tr>
                <tr>
                  <th>Task reminders</th>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                </tr>
                <tr>
                  <th>File uploads</th>
                  <td>
                    <p>5mb</p>
                  </td>
                  <td>
                    <p>100mb</p>
                  </td>
                  <td>
                    <p>100mb</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="tablesDealsPage">
              <caption>Task views</caption>
              <tbody>
                <tr>
                  <th>List layout</th>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                </tr>
                <tr>
                  <th>Board layout</th>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>label, filter, personal</p>
                  </td>
                  <td>
                    <p>in team projects too</p>
                  </td>
                </tr>
                <tr>
                  <th>Calendar layout</th>
                  <td>
                    <p>❎</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                </tr>
                <tr>
                  <th>Custom filters</th>
                  <td>
                    <p>3</p>
                  </td>
                  <td>
                    <p>150</p>
                  </td>
                  <td>
                    <p>150 each</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="tablesDealsPage">
              <caption>Tascoder Assist</caption>
              <tbody>
                <tr>
                  <th>Filter assist</th>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                </tr>
                <tr>
                  <th>Task assist</th>
                  <td>
                    <p>❎</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                </tr>
                <tr>
                  <th>Priority levels</th>
                  <td>
                    <p>❎</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                  <td>
                    <p>✅</p>
                  </td>
                </tr>
                <tr>
                  <th>Sub-tasks</th>
                  <td>
                    <p>Limited sessions</p>
                  </td>
                  <td>
                    <p>Unlimited sessions</p>
                  </td>
                  <td>
                    <p>Unlimited sessions</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="dealsPageStartNow">
          <h2>Join 30 million+ people who rely on Todoist to manage work and life</h2>
          <p>Plus tens of thousands of teams from companies of all sizes.</p>
          <Link to={"/startNow"} onClick={scrollToTop}>start now</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
