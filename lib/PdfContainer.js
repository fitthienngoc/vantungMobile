import React from 'react';

export default (props) => {
  const bodyRef = React.createRef();
  const createPdf = () => props.createPdf(bodyRef.current);
  return (
    <div className="text-center" style={{ padding: 15 }}>
      {/* <section className="pdf-container"> */}
        <section className="pdf-body" ref={bodyRef}>
          {props.children}
        </section>
        <section className="pdf-toolbar">
          <div onClick={createPdf} className="button size-1 style-3" >
            <span className="button-wrapper">
              <span className="icon"><img src="/static/theme1/img/icons8-download-50.png" alt="" /></span>
              <span className="text">Tải về</span>
            </span>
          </div>

        {/* </section> */}

      </section>
    </div>
  )
}