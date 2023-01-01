import React from "react";
import Layout from "../components/Layout";
import SearchBar from "../components/Navs/Searchbar";
import { ResponsiveLine } from "@nivo/line";
import { LineChartData } from "../data/LineChartData";
import Others from "../components/dashboard/others";
import InfoCard from "../components/dashboard/others/InfoCard";

const Dashboard = () => {
	return (
		<Layout>
			<div className='md:flex gap-4'>
				<div className='md:w-[70%]'>
					<SearchBar showSearchBar />
					<section className=' w-full h-[400px] py-12 pl-4 rounded-3xl bg-purple-mid '>
						<div className=' flex'>
							<h3 className='font-semibold text-white text-xl'>$29,800.65</h3>
							<div className='text-lg px-8 pb-4 text-green-600'>+2.43% </div>
						</div>
						<div className='w-full h-[100%] '>
							<ResponsiveLine
								data={LineChartData}
								margin={{ top: 10, right: 30, bottom: 50, left: 60 }}
								xScale={{ type: "point" }}
								yScale={{
									type: "linear",
									min: "0",
									max: "auto",
									stacked: false,
									reverse: false,
								}}
								yFormat=' >-.2f'
								curve='natural'
								axisTop={null}
								axisRight={null}
								axisBottom={{
									orient: "bottom",
									tickSize: 0,
									tickPadding: 12,
									tickRotation: 0,
									legend: "",
									legendOffset: 36,
									legendPosition: "middle",
								}}
								axisLeft={{
									orient: "left",
									tickSize: 0,
									tickPadding: 38,
									tickRotation: 0,
									legend: "",
									legendOffset: -40,
									legendPosition: "middle",
								}}
								enableGridX={false}
								colors={{ datum: "color" }}
								lineWidth={3}
								pointSize={0}
								pointColor={{ theme: "background" }}
								pointBorderWidth={3}
								pointBorderColor={{ from: "serieColor", modifiers: [] }}
								pointLabelYOffset={-12}
								// enableCrosshair={false}
								crosshairType='cross'
								useMesh={true}
								legends={[]}
								enableSlices='x'
								theme={{
									axis: { ticks: { text: { fontSize: 14, fill: "#8E95A9" } } },
									grid: {
										line: {
											stroke: "hsla(226, 20%, 84%, 1)",
											strokeDasharray: "2 4",
										},
									},
								}}
								sliceTooltip={({ slice }) => {
									return (
										<div
											style={{
												padding: "9px 12px",
											}}>
											{slice.points.map((point) => (
												<div
													key={point.id}
													style={{
														background: point.serieColor,
														padding: "8px 20px",
														borderRadius: "6px",
														color: "white",
														marginBottom: "5px",
													}}>
													{Number(point.data.yFormatted).toFixed(0)}
												</div>
											))}
										</div>
									);
								}}
							/>
						</div>
					</section>
					<section className=' w-full '>
						<Others />
					</section>
				</div>
				<div>
					<InfoCard />
				</div>
			</div>
		</Layout>
	);
};

export default Dashboard;
