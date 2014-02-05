<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="KassaKvitto.Default" ViewStateMode="Disabled" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>KassaKvitto</title>
    <link href="Style.css" rel="stylesheet" />
</head>
<body>
    <h1>KassaKvitto</h1>
    <form id="form1" runat="server">
        <div id="topBar">
        </div>
       <p>
         <asp:Label ID="Label1" runat="server" Text="Total Köpesumma"></asp:Label>
       </p>  
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox> 
        <p>
            <asp:Label ID="Label2" runat="server" Text="Kr"></asp:Label>
        </p>
        <asp:Button ID="Button3" runat="server" Text="Beräkna rabatt" OnClick="Button1_Click" />
       <div>
         <asp:Label ID="Label3" runat="server" Text=""></asp:Label>
       </div>
    </form>
</body>
</html>
