import React, { Component } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import ItemDetails from "json/itemDetails.json";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import PreLoad from "parts/PreLoad";
import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Detail Page";
    window.scrollTo(0, 0);
    if (!this.props.page[this.props.match.params.id])
      this.props
        .fetchPage(
          `/itemDetails/${this.props.match.params.id}`,
          this.props.match.params.id
        )
        .then((response) => {
          document.title = `Staycation | ${response.name}`;
        });
  }
  render() {
    const { page, match } = this.props;

    if (!page[match.params.id]) return <PreLoad />;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
        <FeaturedImage data={page[match.params.id].imageUrls} />
        <section className="container mb-5">
          <div className="row">
            <div className="col-lg-7 col-12 ">
              <Fade bottom>
                <PageDetailDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-lg-5 col-12">
              <Fade bottom>
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        {/* <Testimony data={ItemDetails.testimonial} /> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
