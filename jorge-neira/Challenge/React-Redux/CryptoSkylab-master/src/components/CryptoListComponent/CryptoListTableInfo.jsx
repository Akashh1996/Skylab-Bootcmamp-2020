import React, { useState } from 'react';
import {
	saveOnFavoriteList,
	removeFromFavoriteList
} from '../../actions/action-creator';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
	root: {
		marginTop: 2,
		height: 6,
		borderRadius: 5
	},
	colorPrimary: {
		backgroundColor:
			theme.palette.grey[theme.palette.type === '#37465B' ? 100 : 600]
	},
	bar: {
		backgroundColor: '#08C6AB'
	}
}))(LinearProgress);

function CryptoListTableInfo({ data }) {
	const [checkbox, setCheckbox] = useState(false);
	const currentTableData = {
		id: data.id ? data.id : 'N/A',
		rank: data.market_cap_rank ? data.market_cap_rank : 'N/A',
		name: data.name ? data.name : 'N/A',
		symbol: data.symbol ? data.symbol.toUpperCase() : 'N/A',
		image: data.image
			? data.image
			: 'https://cdn0.iconfinder.com/data/icons/mono2/100/not-allowed-512.png',
		currentPrice: data.current_price
			? `€${data.current_price.toLocaleString()}`
			: 'N/A',
		market24h: data.market_cap_change_percentage_24h
			? data.market_cap_change_percentage_24h
			: 'N/A',
		market24hValueColor: data.market_cap_change_percentage_24h
			? Math.sign(data.market_cap_change_percentage_24h) === 1
				? 'positive'
				: 'negative'
			: 'N/A',
		sparkline: data.sparkline_in_7d.price
			? [...data.sparkline_in_7d.price]
			: [1, 1, 1, 1, 1, 1, 1],
		marketCap: data.market_cap ? `€${data.market_cap.toLocaleString()}` : 'N/A',
		circulatingSupply: data.circulating_supply.toLocaleString(),
		circulatingSupplyStatusBar: function () {
			return Math.round(
				(Math.round(data.circulating_supply) / Math.round(data.total_supply)) *
					100
			);
		}
	};

	return (
		<>
			<tr className="list-table-row" key={currentTableData.id}>
				<td>
					<form>
						<input
							name="isFavorite"
							type="checkbox"
							checked={checkbox}
							onChange={() => {
								if (!checkbox) {
									saveOnFavoriteList(data);
									setCheckbox(true);
								} else {
									removeFromFavoriteList(data.id);
									setCheckbox(false);
								}
							}}
						/>
					</form>
				</td>
				<td>{currentTableData.rank}</td>
				<td>
					<div className="logo-crytolist-image">
						<img src={currentTableData.image} alt="crypto-logo" />
						{`${currentTableData.name} ${currentTableData.symbol}`}
					</div>
				</td>
				<td>{currentTableData.currentPrice}</td>
				<td className={currentTableData.market24hValueColor}>
					{currentTableData.market24h}
				</td>
				<td>
					<span>
						<Sparklines data={currentTableData.sparkline} height={80}>
							<SparklinesLine
								style={{
									stroke: '#5AFFE7',
									strokeWidth: '2',
									fill: 'none'
								}}
							/>
							<SparklinesSpots />
						</Sparklines>
					</span>
				</td>
				<td>{currentTableData.marketCap}</td>
				<td>
					{`${currentTableData.circulatingSupply} ${currentTableData.symbol}`}
					{currentTableData.circulatingSupplyStatusBar() < 100 && (
						<BorderLinearProgress
							variant="determinate"
							value={Number(currentTableData.circulatingSupplyStatusBar())}
						/>
					)}
				</td>
			</tr>
		</>
	);
}

export default CryptoListTableInfo;
