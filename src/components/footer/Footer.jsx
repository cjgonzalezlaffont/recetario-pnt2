export const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary">
            <section className="d-flex justify-content-between p-4">
                <div className="me-5">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="" className=" me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className=" me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className=" me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className=" me-4">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className=" me-4">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className=" me-4">
                        <i className="fab fa-github"></i>
                    </a>
                </div>

            </section>


            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">ORT PNT2</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                            />
                            <p>
                                Proyecto final para la materia PNT2    (Programacion en nuevas tecnologías 2)

                                El mismo consiste en una api de recetas.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Integrantes</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                            />
                            <p>
                                <a >MDBootstrap</a>
                            </p>
                            <p>
                                <a >MDWordPress</a>
                            </p>
                            <p>
                                <a >BrandFlow</a>
                            </p>
                            <p>
                                <a >Bootstrap Angular</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful links</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                            />
                            <p>
                                <a >Your Account</a>
                            </p>
                            <p>
                                <a >Become an Affiliate</a>
                            </p>
                            <p>
                                <a >Shipping Rates</a>
                            </p>
                            <p>
                                <a >Help</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                            />
                            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            <div
                className="text-center p-3"
            >
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/"
                >MDBootstrap.com</a
                >
            </div>
        </footer>
    )
}
