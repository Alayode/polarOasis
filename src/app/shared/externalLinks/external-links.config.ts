/**
 * This file stores all the external config files for Jetblue
 *
 *  @params {{AOFIDS: string; GOFIDS: string;
 *  MXFIDS: string; outstandingDelayCodes: string;
 *  delayCodeSummary: string; byRoute: string;
 *  inflightByRoute: string; spidsManager: string;
 *  claimManager: string;
 *  turnTimeVerification: string;
 *  turnTableRules: string}}
 *
 *

 a config object that shares the links for blueEye

 */
export const externalLinks = {
    AOFIDS: '//bluefids.jetblue.com/JetBlue/Applications/Operations/FIDS/JFK/aoreports/1/',
    GOFIDS: '//bluefids.jetblue.com/JetBlue/Applications/Operations/FIDS/JFK/goreports/1/',
    MXFIDS: '//bluefids.jetblue.com/JetBlue/Applications/Operations/FIDS/JFK/mxreports/1/',
    outstandingDelayCodes: '//ssrs.jetblue.com/Reports/Pages/ReportViewer.aspx?%2fBlueEye+' +
    'Reporting%2fOutstanding+Delay+Codes+Summary&rs:Command=Render',
    delayCodeSummary: '//ssrs.jetblue.com/Reports/Pages/ReportViewer.aspx?%2fBlueEye+Repor' +
    'ting%2fBlue+Eye+Delay+Code+Report&rs:Command=Render' ,
    byRoute: '//apps.jetblue.com/applications/b/blueeye/nps/RouteNPS.pdf' ,
    inflightByRoute: '//apps.jetblue.com/applications/b/blueeye/nps/RouteInflightScores.pdf' ,
    spidsManager: '//apps.jetblue.com/applications/b/blueeye/fids/default.aspx' ,
    claimManager: '//apps.jetblue.com/applications/b/blueeye/fids/ClaimManager.aspx' ,
    turnTimeVerification: '//apps.jetblue.com/applications/b/blueeye/TurnTimesReport.aspx' ,
    turnTableRules: '//apps.jetblue.com/applications/b/blueeye/TurnTableRules.aspx' ,
  };
  