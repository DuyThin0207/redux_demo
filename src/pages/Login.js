import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div className='row'>
            <div className="offset-3 col-6">
                <h1 style={{textAlign: 'center'}}>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control"/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="submit" className="ml-3 btn btn-secondary"><Link to={'register'} style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>Register</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}