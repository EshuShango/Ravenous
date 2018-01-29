import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import businesses  from '../Business/Business';

//console.log(businesses);

class BusinessList extends React.Component {
  render() {
    return (<div className="BusinessList">
  {
     this.props.businesses.map(business => {
       return <Business key={business.id} business={business}/>;
     })
   }
</div>);
  }
}
export default BusinessList;
