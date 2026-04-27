<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<head>
<title>Employee Salary Report</title>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>

<body>

<h1>Employee Salary Report</h1>

<table>

<tr>
<th>Name</th>
<th>ID</th>
<th>Department</th>
<th>Salary Per Day</th>
<th>Working Days</th>
<th>Total Salary</th>
</tr>

<xsl:for-each select="employees/employee">

<tr>

<td><xsl:value-of select="name"/></td>
<td><xsl:value-of select="id"/></td>
<td><xsl:value-of select="department"/></td>
<td><xsl:value-of select="salaryperday"/></td>
<td><xsl:value-of select="days"/></td>

<td>
<xsl:value-of select="salaryperday * days"/>
</td>

</tr>

</xsl:for-each>

</table>

</body>
</html>

</xsl:template>
</xsl:stylesheet>