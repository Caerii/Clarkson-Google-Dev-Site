import { Link } from 'react-router-dom';

import logo from './logo.svg';

export default function MyFooter()
{
    return(
        <footer style={{backgroundColor: "rgb(248, 249, 250)"}}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                        <img src={logo} className="mb-2" alt="" width="100" height="100"/>
                        <small className="d-block mb-3 text-muted">&copy; 2020-2021</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Pages</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link className="text-muted" to="/">Home</Link></li>
                            <li><Link className="text-muted" to="/members">Members</Link></li>
                            <li><Link className="text-muted" to="/blog">Blog</Link></li>
                            <li><Link className="text-muted" to="/credits">Credits</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Socials</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link className="text-muted" to="mailto:clarksongdsc@gmail.com">Email</Link></li>
                            <li><Link className="text-muted" to="https://gdsc.community.dev/clarkson-university">Google Dev Community</Link></li>
                            <li><Link className="text-muted" to="https://github.com/Clarkson-Google-Developer-Student-Club">GitHub</Link></li>
                            <li><Link className="text-muted" to="https://www.linkedin.com/company/clarkson-google-developer-student-club">LinkedIn</Link></li>
                            <li><Link className="text-muted" to="https://www.instagram.com/clarkson_gdsc">Instagram</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}