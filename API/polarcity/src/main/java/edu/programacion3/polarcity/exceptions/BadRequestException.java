package edu.programacion3.polarcity.exceptions;


public class PolarCityException extends RuntimeException{
    public PolarCityException() {
    }

    public PolarCityException(String message) {
        super(message);
    }

    public PolarCityException(String message, Throwable cause) {
        super(message, cause);
    }

    public PolarCityException(Throwable cause) {
        super(cause);
    }

    public PolarCityException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
