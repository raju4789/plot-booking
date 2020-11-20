package com.plotbooking.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.plotbooking.model.PlotInfo;
import com.plotbooking.services.PlotService;

@RestController
@CrossOrigin
public class PlotController {
	
	@Autowired
	private PlotService plotService;
	
	@GetMapping("/plots")
	public ResponseEntity<List<PlotInfo>> getAllPlots(){
		try {
			return new ResponseEntity<List<PlotInfo>>(plotService.getAllPlots(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<List<PlotInfo>>(new ArrayList<PlotInfo>(), HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}
	
	@PutMapping("/plots")
	public ResponseEntity<String> updatePlot(@RequestBody PlotInfo plotInfo){
		try {
			System.out.println(plotInfo);
			plotService.upDatePlot(plotInfo);
			return new ResponseEntity<String>("Successfully updated", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

}
