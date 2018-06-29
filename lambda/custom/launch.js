module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';
    const reprompt = speechText
    const cardTitle = `Launch`
    const cardText = speechText

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(reprompt)
      .withSimpleCard(cardTitle, cardText)
      .getResponse()
  },
}
