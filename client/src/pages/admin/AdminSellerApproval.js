import React, { useState, useEffect } from "react";

import {
  getAllSeller,
  approveSeller,
  rejectSeller,
} from "../../action/auth.js";

import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card.js";

const AdminSellerApproval = () => {
  const [sellerList, setSellerList] = useState([]);
  const navigate = useNavigate();

  const displayData = [];

  useEffect(() => {
    async function getAllPendingSeller() {
      await getAllSeller().then((res) => {
        if (res?.sellers) {
          setSellerList(res?.sellers);
        }
      });
    }

    getAllPendingSeller();
  }, []);

  console.log(sellerList);

  const handleAcceptSeller = async (id) => {
    await approveSeller(id).then((res) => {
      if (res) {
        navigate(0);
      }
    });
  };
  const handleRejectSeller = async (id) => {
    await rejectSeller(id).then((res) => {
      if (res) {
        navigate(0);
      }
    });
  };

  return (
    <div className="p-md-3">
      <div className="col-12 d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly flex-wrap row mb-md-4">
        {displayData.map((item, index) => {
          return (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <Card data={item} />
            </div>
          );
        })}
      </div>
      <div className="col-12 text-start">
        <p className="fw-bold text-info fs-3">Seller List</p>
      </div>
      <div className="col-12">
        <div className="col-12 text-center mb-3">
          <div className="d-flex flex-row flex-wrap col-12">
            <div className="col-2 fw-bold text-break">Bussiness Name</div>
            <div className="col-2 fw-bold text-break">Phone</div>
            <div className="col-3 fw-bold text-break">Email</div>
            <div className="col-2 fw-bold text-break">Status</div>
            <div className="col-3">Update</div>
          </div>
        </div>
        {sellerList?.map((item, index) => {
          return (
            <div className="col-12 text-center" key={index}>
              <div className="d-flex flex-row flex-wrap col-12 text-warp my-1">
                <div className="col-2 fw-bold text-break">
                  {item?.businessName}
                </div>
                <div className="col-2 fw-bold text-break">{item?.phone}</div>
                <div className="col-3 fw-bold text-break">{item?.email}</div>
                <div className="col-2 fw-bold text-break">{item?.status}</div>
                <div className="d-flex flex-row flex-wrap col-3 gap-2 justify-content-center align-items-center">
                  <button
                    className="btn btn-success"
                    onClick={() => handleAcceptSeller(item?._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRejectSeller(item?._id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSellerApproval;
