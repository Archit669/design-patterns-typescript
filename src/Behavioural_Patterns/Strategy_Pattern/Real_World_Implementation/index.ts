import { GrayscaleStrategy, SepiaStrategy } from "./filterStrategy";
import { ImageProcessor } from "./ImageProcessor";

const imageProcessor = new ImageProcessor(new GrayscaleStrategy());
imageProcessor.applyFilter("archit");

imageProcessor.setFilterStrategy(new SepiaStrategy());
imageProcessor.applyFilter('archit')
