package com.plotbooking;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import com.plotbooking.model.PlotInfo;
import com.plotbooking.repository.PlotRepository;

@Component
class DataLoadListener implements ApplicationListener<ApplicationReadyEvent> {

	private static Logger log = Logger.getLogger(DataLoadListener.class);

	@Autowired
	private PlotRepository plotRepository;


	@Override
	public void onApplicationEvent(ApplicationReadyEvent event) {
		log.info("Loading initial data...");
		try {
			for (int i = 0; i < 48; i++) {
				PlotInfo plot = new PlotInfo(i+1, "available", null);
				plotRepository.save(plot);
			}

		} catch (Exception e) {
			log.error("Exception loading initial data...", e);
			e.printStackTrace();
		}
	}

}

