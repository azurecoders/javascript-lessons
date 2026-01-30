import winston from "winston";

// Create a new instance of the Winston logger
export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(
      ({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`,
    ),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/error/error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "logs/combinedlog.log" }),
  ],
});
