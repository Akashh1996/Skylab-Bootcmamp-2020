import React from 'react';
import NavigationHero from '../navigationComponent/navigationHero';
class DashboardHero extends React.Component {
	render() {
		return (
			<>
      <section className="dashbaord-container">
				<NavigationHero />
        <nav className="tophero-navigation">
          
        </nav>
      </section>
			</>
		);
	}
}

export default DashboardHero;
