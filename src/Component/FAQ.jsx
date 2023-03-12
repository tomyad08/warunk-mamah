import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  const Data = [
    {
      id: 1,
      pertanyaan: "Gimana cara pesennya?",
      jawaban:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      id: 2,
      pertanyaan: "Apakah ada biaya ongkir?",
      jawaban:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      id: 3,
      pertanyaan: "Berapa harga outfit lu?",
      jawaban:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      id: 4,
      pertanyaan: "Siapa sih ini?",
      jawaban:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
  ];
  return (
    <div
      className="container my-4"
      style={{ fontFamily: "'Signika Negative', sans-serif" }}
    >
      <div>
        <div className="row my-4">
          <div className="col-md mb-4" id="faq">
            <div className="text-center">
              <h1>
                <strong>Frequently Ask Question (FAQ)</strong>
              </h1>
              <p>Pertanyaan yang sering ditanyakan oleh pelanggan kami ...</p>
            </div>
            <div>
              <Accordion>
                {Data.map((value) => (
                  <Accordion.Item eventKey={value.id}>
                    <Accordion.Header>{value.pertanyaan}</Accordion.Header>
                    <Accordion.Body>{value.jawaban}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="col-md" id="lokasi">
            <h1 className="text-center ">
              <strong>Lokasi Toko Offline</strong>
            </h1>
            <p style={{ textAlign: "justify" }}>
              Jika dirasa ingin datang langsung ke toko kami, silahkan klik
              tampilan google maps di bawah ini.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.2287564899066!2d108.72455841477257!3d-6.86316609504036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTEnNDcuNCJTIDEwOMKwNDMnMzYuMyJF!5e0!3m2!1sid!2sid!4v1678550034094!5m2!1sid!2sid"
              width="100%"
              height="210"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
