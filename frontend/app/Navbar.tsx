"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand fw-bold" href="/">e-Football</Link>
          <div className="navbar-nav">
            <Link className="nav-link" href="/home">Home</Link>
            <Link className="nav-link" href="/account">Account</Link>
            {/* Modal Trigger Button */}
            <button 
              className="btn btn-primary ms-3" 
              data-bs-toggle="modal" 
              data-bs-target="#joinModal"
            >
              Join Tournament
            </button>
          </div>
        </div>
      </nav>

      {/* Bootstrap Modal */}
      <div className="modal fade" id="joinModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Enter Tournament</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Entry Fee: <strong>KES 50</strong></p>
              <input type="text" className="form-control mb-3" placeholder="M-Pesa Number (07...)" />
              <button className="btn btn-success w-100">Pay via M-Pesa</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}