import React, { useState } from "react";
import AccordionDetails from "./AccordionDetails";
import AccordionSummary from "./AccordionSummary";

const Accordian = ({
	defaultExpanded = false,
	summary = "Your Title Here",
	details = "Your content Here",
	style = { display: "flex" },
}) => {
	const [expandedState, setExpandedState] = useState(defaultExpanded);
	return (
		<div
			className={`accordian accordian-expand-${expandedState}`}
			style={style}
		>
			<AccordionSummary
				onClick={() => {
					setExpandedState(!expandedState);
				}}
			>
				{summary}
			</AccordionSummary>
			<AccordionDetails>{details}</AccordionDetails>
		</div>
	);
};

export default Accordian;
