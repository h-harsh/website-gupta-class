import Link from "next/link";
import React from "react";

const data = [
  {
    categoryName: "GST",
    data: [
      { ticker: "null", name: "INPUT TAX CREDIT  " },
      { ticker: "null", name: "INPUT TAX CREDIT UNDER GST  " },
      { ticker: "null", name: "GST REGISTRATION  " },
      { ticker: "null", name: "GST REGISTRATION CERTIFICATE  " },
      { ticker: "null", name: "GST RETURN " },
      { ticker: "null", name: "GST RETURN " },
      { ticker: "null", name: "GSTR-3B " },
      { ticker: "null", name: "GSTR-1 " },
      { ticker: "null", name: "ANNUAL RETURN GSTR 9 " },
      { ticker: "null", name: "PLACE OF SUPPLY IN GST " },
      { ticker: "null", name: "TIME OF SUPPLY IN GST " },
      { ticker: "null", name: "VALUATION OF SUPPLY UNDER GST " },
      { ticker: "null", name: "EWAY BILL UNDER GST " },
      { ticker: "null", name: "E INVOICING UNDER GST " },
      { ticker: "null", name: "COMPOSITION SCHEME UNDER GST " },
      { ticker: "null", name: "CHARGE OF GST  " },
      { ticker: "null", name: "EXEMPTION FROM GST " },
      { ticker: "null", name: "TAX INVOICE UNDER GST " },
      { ticker: "null", name: "CREDIT NOTE AND DEBIT NOTE IN GST " },
      { ticker: "null", name: "JOB WORK UNDER GST " },
      { ticker: "null", name: "REVERSE CHARGE UNDER GST " },
      { ticker: "null", name: "TDS UNDER GST " },
      { ticker: "null", name: "TCS UNDER GST " },
      { ticker: "null", name: "REFUND UNDER GST " },
      { ticker: "null", name: "SHOW CAUSE NOTICE UNDER GST " },
      { ticker: "null", name: "SCN UNDER GST " },
      { ticker: "null", name: "NOTICE UNDER GST " },
      { ticker: "null", name: "SUMMONS UNDER GST " },
      { ticker: "null", name: "PROSECUTION UNDER GST " },
      { ticker: "null", name: "SEARCH UNDER GST " },
      { ticker: "null", name: "OFFENCES AND PENALTIES UNDER GST" },
    ],
  },
];

const FooterSub = () => {
  return (
    <div className="sp-footer-popular-stocks-wrapper">
      <h3 className="body_l_semibold">MOST POPULAR TOPICS ON GST</h3>
      <div style={{ textAlign: "justify" }}>
        {data.map((item, i) => {
          return (
            <div key={i} className="sp-footer-popular-sub-container">
              <div className="popular-stocks-cont">
                {item.data.map((innerItem, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      {idx === 0 && (
                        <span className="popular-stocks-title body_regular">
                          {item?.categoryName?.toUpperCase()} :
                        </span>
                      )}
                      {idx !== 0 && (
                        <span className="popular-stocks-bar"> | </span>
                      )}
                      <a
                        href={`/stocks/${innerItem.ticker.toLowerCase()}`}
                        className="body_regular sp-footer-text-links-resp sp-footer-text-links-resp-popular-stocks"
                      >
                        {innerItem.name.toUpperCase()}
                      </a>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSub;
