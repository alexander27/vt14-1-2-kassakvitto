<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="KassaKvitto.Default" ViewStateMode="Disabled" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>KassaKvitto</title>
    <link href="Style.css" rel="stylesheet" />
    <script src="script.js"></script>
</head>
<body>
    <h1>KassaKvitto</h1>
    <form id="form1" runat="server">

        <div id="topBar">
        </div>


        <asp:Label ID="Label1" runat="server" Text="Total Köpesumma"></asp:Label>

        <div>
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            <asp:Label ID="Label2" runat="server" Text="Kr"></asp:Label>
            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Fel" ControlToValidate="TextBox1" Display="Dynamic" Enabled="true"></asp:RequiredFieldValidator>
            <asp:CompareValidator ID="CompareValidator1" runat="server" ErrorMessage="Är inte ett flyttal" Display="Dynamic" ControlToValidate="TextBox1" Operator="DataTypeCheck" Type="Double"></asp:CompareValidator>
            <asp:CompareValidator ID="CompareValidator2" runat="server" ErrorMessage="summan måste vara 0 eller mer" Operator="GreaterThan" ValueToCompare="0" Type="Double" Display="Dynamic" ControlToValidate="TextBox1"></asp:CompareValidator>
            <asp:Button ID="Button3" runat="server" Text="Beräkna rabatt" OnClick="Button1_Click" />
        </div>


        <asp:PlaceHolder ID="placeHolder" runat="server" Visible="false">
            <div id="BB">

                <div>
                    <h2>DeVe</h2>
                    <h3>en del av EllenU</h3>
                    <p>Tel: 0772-28-80-00</p>
                    <p>Öppettider 8-17</p>
                    <p>-----------------------</p>
                </div>

                <p>
                    <span>Total: </span>
                    <asp:Label ID="Total" runat="server" CssClass="span"></asp:Label>
                </p>

                <p>
                    <span>I procent: </span>
                    <asp:Label ID="DiscountRate" runat="server" CssClass="span"></asp:Label>
                </p>


                <p>
                    <span>Rabatt: </span>
                    <asp:Label ID="MoneyOff" runat="server" CssClass="span"></asp:Label>
                </p>


                <p>
                    <span>Totalt efter rabbat: </span>
                    <asp:Label ID="Subtotal" runat="server" CssClass="span"></asp:Label>

                </p>
                <p>-----------------------</p>
                <p>ORG.NR: 202100-6271</p>
                <p>VÄLKOMMEN ÅTER</p>

            </div>



        </asp:PlaceHolder>



    </form>
</body>
</html>
