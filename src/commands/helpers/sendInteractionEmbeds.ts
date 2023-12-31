const noEmbed = require('./noInteractionEmbed');

module.exports = async (bot: any, interaction: any, embeds: any) => {
  try {
    bot.logger.debug({text: embeds});
    interaction.createMessage({
      content: "",
      embeds: embeds,
    })
    return;
  } catch (err) {
    bot.logger.error({text: `Could not send embed:\n` + err});
    // @ts-ignore
    bot.logger.debug({text: err.stack});
    noEmbed(bot, interaction);
    return;
  }
}
