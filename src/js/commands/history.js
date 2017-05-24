/**
 * The "history" command
 * @param  {Object} instance The instance of fakeTerminal
 * @return {Object}
 */
window.FakeTerminal.command.history = function (instance) {

    //  Extend the base command
    window.FakeTerminal.command._base.apply(this, arguments);

    /**
     * To avoid scope issues, use 'base' instead of 'this' to reference
     * this class from internal events and functions.
     */

    var base = this;

    // --------------------------------------------------------------------------

    /**
     * Describes the command
     * @return {Object}
     */
    base.info = function () {
        return {
            description: 'Displays the command history, up to ' + instance.options.historyLength + ' items'
        };
    };

    // --------------------------------------------------------------------------

    /**
     * This method is called when fake terminal encounters the command which this
     * class represents
     * @param  {Array} userArgs An array of arguments passed by the user
     * @return {Object}
     */
    base.execute = function (userArgs) {

        var deferred = new $.Deferred();
        base.write('  ');

        for (var i = 0; i < instance.history.length; i++) {
            base.write(i + '  ' + instance.history[i]);
        }

        base.write('  ');

        deferred.resolve();
        return deferred;
    };

    // --------------------------------------------------------------------------

    return base;
};
