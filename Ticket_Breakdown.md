# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Add a custom agent ID field to the Agents table

* Acceptance Criteria: The Agents table should have an additional field for the custom Agent ID that can be assigned by the Facilities
* Time/Effort Estimate: 2 hours
* Implementation Details: Create a new column in the Agents table to store the custom ID. Update the schema accordingly and validate that all existing data is still accessible.

### Create a mapping between the internal database ID and the custom Agent ID

* Acceptance Criteria: A mapping between the internal database ID and the custom Agent ID should be created to allow for easy referencing of both IDs
* Time/Effort Estimate: 3 hours
* Implementation Details: Create a new table to store the mapping between the internal database ID and the custom Agent ID. Update the getShiftsByFacility function to reference the mapping table for the custom Agent ID.

### Update getShiftsByFacility to return the custom Agent ID

* Acceptance Criteria: The getShiftsByFacility function should return the custom Agent ID instead of the internal database ID
* Time/Effort Estimate: 2 hours
* Implementation Details: Update the getShiftsByFacility function to return the custom Agent ID instead of the internal database ID. Validate that the function still returns all necessary metadata about the Agent assigned to each Shift.
* Update the generateReport function to use the custom Agent ID

* Acceptance Criteria: The generateReport function should use the custom Agent ID when generating reports for Facilities
* Time/Effort Estimate: 3 hours
* Implementation Details: Update the generateReport function to use the custom Agent ID instead of the internal database ID. Validate that the reports are generated correctly and include the correct custom Agent ID.

### Test and Deploy

* Acceptance Criteria: All changes should be tested and deployed to production
* Time/Effort Estimate: 4 hours
* Implementation Details: Test all changes thoroughly, including edge cases and possible errors. Deploy all changes to production after thorough testing and validation.
