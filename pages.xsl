<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head><title>
                Self-Help Resources
            </title></head>
            <body style="background-color:orange;">
                <h1 align= "center" style="color:green;">Self-Help Resources</h1>
                <table border="1" align="center">
                    <tr style="background-color:red;"><th>UID</th><th>ID Number</th><th>Name</th><th>Type of Content</th><th>Time Required</th></tr>
                    <xsl:for-each select="Resource/Physical/Physical_Help">
                            <tr>
                                <td><xsl:value-of select="@UID"/></td>
                                <td><xsl:value-of select="id"/></td>
                                <td><xsl:value-of select="name"/></td>
                                <td><xsl:value-of select="type"/></td>
                                <td><xsl:value-of select="time"/></td>
                            </tr>
                    </xsl:for-each>
                </table>
            <br></br>

            <table border="1" align="center">
                <tr style="background-color:red;"><th>UID</th><th>ID Number</th><th>Name</th><th>Type of Content</th><th>Time Required</th></tr>
                <xsl:for-each select="Resource/Mental/Mental_Help">
                        <tr>
                            <td><xsl:value-of select="@UID"/></td>
                            <td><xsl:value-of select="id"/></td>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="type"/></td>
                            <td><xsl:value-of select="time"/></td>
                        </tr>
                </xsl:for-each>
            </table>   

            <br></br>
                <table border="1" align="center">
                    <tr style="background-color:red;"><th>UID</th><th>ID Number</th><th>Name</th><th>Type of Content</th><th>Time Required</th></tr>
                    <xsl:for-each select="Resource/Career/Career_Help">
                            <tr>
                                <td><xsl:value-of select="@UID"/></td>
                                <td><xsl:value-of select="id"/></td>
                                <td><xsl:value-of select="name"/></td>
                                <td><xsl:value-of select="type"/></td>
                                <td><xsl:value-of select="time"/></td>
                            </tr>
                    </xsl:for-each>
                </table>     
            </body>
        </html>
    </xsl:template>


</xsl:stylesheet>