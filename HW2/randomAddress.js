/**
 * Created by fletchermaffett on 10/24/16.
 */

//Write a script that can create random addresses
//Arrays to contain: Street Number, Street Name, City, State, Zip Code

var streetNumbers = ["1456", "9485", "74", "2", "478", "8243", "534", "39", "57", "529", "7564", "493"];
var streetNames= ["Woodvale Dr.", "Runningpine Ln.", "Hollowpointe Ct.", "Waskerville Dr.", "Wayne Ave.", "Elsie St.", "Cricket Junction"];
var cityNames = ["Atlanta", "Birmingham", "San Francisco", "Roswell", "New York", "Jonesburo", "Hillside", "Dale", "Nexus", "Aaronsburg", "Pittsburgh", "Amsterdam"];
var stateAbbrevs = ["GA", "AL", "CO", "CA", "DE", "TX", "OH", "ME", "NV", "IA", "ID", "AR"];
var zipCodes = ["30327", "50789", "34598", "09321", "48237", "09634", "12845", "76543", "39571", "87453", "29475", "98653", "75930"];

var randAddress = streetNumbers[Math.round((Math.random()*streetNumbers.length))] + " " +
                    streetNames[Math.round((Math.random()*streetNames.length))] + ", " +
                    cityNames[Math.round((Math.random()*cityNames.length))] + ", " +
                    stateAbbrevs[Math.round((Math.random()*stateAbbrevs.length))] + " " +
                    zipCodes[Math.round((Math.random()*zipCodes.length))];

console.log(randAddress);