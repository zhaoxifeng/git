function ibsTrack(parameter) { 
    _satellite.track(parameter);
};

function createEvent(eventName, eventAction, target, effect){
	return {
		eventInfo : {
			eventName : eventName,
			eventAction : eventAction,
			timeStamp : new Date().getTime(),
			target : target,
			effect : effect
		},
		category : {
			eventType : "Engagement"
		},
		attributes : {
			relatedPageName : "<%=currentPageName%>"
		}
	};
}